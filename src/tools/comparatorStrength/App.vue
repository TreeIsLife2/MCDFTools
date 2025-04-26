<script setup>
import { CdxIcon } from '@wikimedia/codex';
import { cdxIconHelpNotice } from '@wikimedia/codex-icons';

import { CdxLabel, CdxTextInput, CdxButton, CdxSelect, CdxCheckbox, CdxTextArea } from '@wikimedia/codex';
import { reactive } from 'vue';

const data = reactive({
    signalstrength: 0,
    container: 'barrel',
    legacy: false,
    overstack: false,
});

let result = reactive({
    stackable: 0,
    nonstackable: 0,
    give: '',
    setblock: '',
});

const container_slots = {
    "barrel": 27,
    "blast_furnace": 3,
    "brewing_stand": 5,
    "chest": 27,
    "dispenser": 9,
    "dropper": 9,
    "furnace": 3,
    "hopper": 7,
    "shulker_box": 27,
    "smoker": 3,
    "trapped_chest": 27
}

var item_array = [];

/**
 * Generates the necessary data.
 */
function generate() {
    let error_msg = "";
    // return if signal strength is too high
    if (data.signalstrength > 1779) {
        error_msg = "Signal Strength is too High"
        return;
    }

    let signal_strength = data.signalstrength;
    let container = data.container;
    let non_stackables = 0;
    let stackables = 0;
    let stack_size = data.overstack ? 127 : 64;

    if(signal_strength < 2) {
        if(signal_strength < 0) {
            error_msg = "Can't Have Negative Signal Strength"
        } else {
            stackables = signal_strength;
        }
    } else {
        let fullness = (signal_strength-1)/14;
        let slots = container_slots[container];
        let item_min = Math.ceil(64*slots*fullness);
        if(item_min > stack_size*64*slots) {
            error_msg = "Signal Strength is too High"
        } else {
            non_stackables = Math.floor(item_min/64);
            if(non_stackables > stack_size*(slots - 1)) {
                let item_max = Math.ceil(64*slots*signal_strength/14) - 1;
                if(((item_min % 64) != 0) && (Math.floor(item_min/64) == Math.floor(item_max/64))) {
                    error_msg = "That Signal Strength is not Possible with this Container";
                } else {
                    non_stackables += item_min % 64 == 0 ? 0 : 1;
                }
            } else {
                stackables = Math.ceil(item_min - 64*non_stackables);
            }
        }
    }

    if(error_msg == "") {
        result.stackable = stackables;
        result.nonstackable = non_stackables;

        item_array = []
        let slot = 0;
        while(non_stackables > stack_size) {
            item_array.push(`{Slot:${slot}b,id:"minecraft:iron_sword",Count:${stack_size}b}`);
            non_stackables -= stack_size;
            slot++;
        }
        item_array.push(`{Slot:${slot}b,id:"minecraft:iron_sword",Count:${non_stackables}b}`);
        if(stackables > 0) {
            item_array.push(`{Slot:${slot+1}b,id:"minecraft:iron_ingot",Count:${stackables}b}`);
        }

        if(data.legacy) {
            result.give = 
            `/give @p ${"minecraft:" + container} 1 0 {BlockEntityTag:{Items:[${item_array.join(',')}]},display:{Lore:["${signal_strength} Signal Strength"]}}`;
            result.setblock = 
            `/setblock ~ ~ ~ ${"minecraft:" + container} 0 replace {Items:[${item_array.join(',')}]}`;
        } else {
            result.give = 
            `/give @p ${"minecraft:" + container}{BlockEntityTag:{Items:[${item_array.join(',')}]},display:{Lore:["${signal_strength} Signal Strength"]}}`;
            result.setblock = 
            `/setblock ~ ~ ~ ${"minecraft:" + container}{Items:[${item_array.join(',')}]}`;
        }
    } else {

    }
    return false;
}
</script>

<template>
    <div class="form">
        <div class="item">
            <CdxLabel>Signal Strength</CdxLabel>
            <CdxTextInput v-model="data.signalstrength" min="0" max="1779" input-type="number"/>
            <CdxIcon :icon="cdxIconHelpNotice"/>
        </div>
        <div class="item">
            <CdxLabel>Container</CdxLabel>
            <CdxSelect
            v-model:selected="data.container"
            :menu-items="[
                { label: 'minecraft:barrel', value: 'barrel' },
                { label: 'minecraft:blast_furnace', value: 'blast_furnace' },
                { label: 'minecraft:brewing_stand', value: 'brewing_stand' },
                { label: 'minecraft:chest', value: 'chest' },
                { label: 'minecraft:dispenser', value: 'dispenser' },
                { label: 'minecraft:dropper', value: 'dropper' },
                { label: 'minecraft:furnace', value: 'furnace' },
                { label: 'minecraft:hopper', value: 'hopper' },
                { label: 'minecraft:shulker_box', value: 'shulker_box' },
                { label: 'minecraft:smoker', value: 'smoker' },
                { label: 'minecraft:trapped_chest', value: 'trapped_chest' }
            ]"/>
        </div>
        <div class="has-checkbox item">
            <CdxLabel aria-label="legacy">Use pre-1.13 Command Syntax</CdxLabel>
            <CdxCheckbox v-model="data.legacy"></CdxCheckbox>
        </div>
        <div class="has-checkbox item">
            <CdxLabel aria-label="overstack">Use 127 stacks</CdxLabel>
            <CdxCheckbox v-model="data.overstack"></CdxCheckbox>
        </div>

        <button class="cdx-button cdx-button--action-progressive cdx-button--weight-primary" @click="generate">Generate</button>
    </div>

    <div class="result">
        <CdxLabel><span>Stackable: </span><span>{{ result.stackable }}</span></CdxLabel>
        <CdxLabel><span>Non-Stackable: </span><span>{{ result.nonstackable }}</span></CdxLabel>

        <CdxLabel>Give command</CdxLabel>
        <CdxTextArea placeholder='Placeholder' readonly :value="result.give"/>
        <CdxLabel>Setblock command</CdxLabel>
        <CdxTextArea placeholder='Placeholder' readonly :value="result.setblock"/>
    </div>
</template>

<style>
    .item {
        margin-bottom: 10px;
        display: flex;
    }

    .has-checkbox {
        display: flex;
        align-items: center;
    }
</style>
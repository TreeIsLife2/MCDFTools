<script setup>
import { reactive } from 'vue';
import { CdxLabel, CdxTextInput, CdxTextArea, CdxSelect } from '@wikimedia/codex';
import { dataitems, itemsSelect } from './data.js';

let data = reactive({
    item: 'minecraft:acacia_boat',
    filter: '',
});

let result = reactive({
    give: '',
    setblock: '',
})

const items = itemsSelect();

/**
 * Automatically generates results
 */
function autogenerate() {
    let rl = data.item;
    let id = dataitems[rl];
    result.give = `/give @p minecraft:generic_item_block{BlockStateTag:{item:"${id}"},display:{Lore:["${rl}"]}}`;
    result.setblock = `/setblock ~ ~ ~ minecraft:generic_item_block[item=${id}]`;
}
</script>

<template>
    <div class="form">
        <div class="item">
            <CdxLabel>Item</CdxLabel>
            <CdxSelect :menu-items="[
                ...items,
            ]" v-model:selected="data.item" @update:selected="autogenerate"/>
        </div>
        <div>
            <CdxLabel>Filter</CdxLabel>
            <CdxTextInput v-model="data.filter" @keydown="autogenerate"/>
        </div>

        <div>
            <CdxLabel>Give command</CdxLabel>
            <CdxTextArea placeholder='Placeholder' readonly :value="result.give"/>
            <CdxLabel>Setblock command</CdxLabel>
            <CdxTextArea placeholder='Placeholder' readonly :value="result.setblock"/>
        </div>        
    </div>
</template>
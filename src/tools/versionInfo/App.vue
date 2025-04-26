<script setup lang="ts">
import { CdxLabel, CdxSelect } from '@wikimedia/codex';
import { reactive, version } from 'vue';

let data = reactive({
    version: '',
});

let result = reactive({
    launcher: '',
    release: '',
    samvid: '',
    omvid: '',
    datapack: '',
    respack: '',
});

let versions: { label: string, value: string}[] = reactive([]);

let versionsJSON = {};

async function initialize() {
    versionsJSON = await fetch('https://omv-id.github.io/v1.0/JE/ids.json').then((response) => {
        return response.json();
    });

    for (const version of Object.entries(versionsJSON)) {
        versions.push({
            label: version[1].name + ' (' + (version[1].reupload + 1) + ')',
            value: version[0]
        })
    }
}

initialize();
function autogenerate() {
    // Check if the selected version is valid
    if (data.version === '-' || data.version === '') {
        result.launcher = '';
        result.release = '';
        result.samvid = '';
        result.omvid = '';
        return;
    }

    result.launcher = versionsJSON[data.version].launcherID;
    result.release = versionsJSON[data.version].release;
    result.samvid = data.version;
    result.omvid = 'J010000';
}

</script>

<template>
    <div class="form">
        <div class="item">
            <CdxLabel>Version</CdxLabel>
            <CdxSelect :menu-items="[
                ...versions,
            ]" v-model:selected="data.version" @update:selected="autogenerate"/>
        </div>
    </div>

    <div class="result">
        <CdxLabel><span>Launcher name: </span><span>{{ result.launcher }}</span></CdxLabel>
        <CdxLabel><span>Parent version: </span><span>{{ result.release }}</span></CdxLabel>
        <CdxLabel><span>SAMVID ID: </span><span>{{ result.samvid }}</span></CdxLabel>
        <CdxLabel><span>OMV ID: </span><span>{{ result.omvid }}</span></CdxLabel>
        <CdxLabel><span>Data pack version: </span><span>{{ result.datapack }}</span></CdxLabel>
        <CdxLabel><span>Resource pack version: </span><span>{{ result.respack }}</span></CdxLabel>        
    </div>
</template>
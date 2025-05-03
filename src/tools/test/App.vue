<script setup lang="ts">
import { CdxAccordion, CdxButton, CdxButtonGroup, CdxCard, CdxCheckbox, CdxChipInput, CdxCombobox, CdxDialog, CdxField, CdxIcon, CdxInfoChip, CdxLabel, CdxLookup, CdxMenu, CdxMenuButton, CdxMenuItem, CdxMessage, CdxMultiselectLookup, CdxPopover, CdxProgressBar, CdxProgressIndicator, CdxRadio, CdxSearchInput, CdxSearchResultTitle, CdxSelect, CdxTab, CdxTable, CdxTabs, CdxTextArea, CdxTextInput, CdxThumbnail, CdxToggleButton, CdxToggleButtonGroup, CdxToggleSwitch, CdxTooltip, CdxTypeaheadSearch } from '@wikimedia/codex';
import { cdxIconHelpNotice } from '@wikimedia/codex-icons';
import { reactive } from 'vue';

var dummyMenu = reactive([
    { label: 'Item 1', value: 'item1' },
    { label: 'Item 2', value: 'item2' },
    { label: 'Item 3', value: 'item3' },
]);

var buttonGroup = reactive([
    { label: 'Button 1', value: 'button1' },
    { label: 'Button 2', value: 'button2' },
    { label: 'Button 3', value: 'button3' },
]);
</script>

<style>
.form .item {
    margin: 1em 0.5em;
}
</style>

<template>
    <div class="form">
        <div class="item"><CdxAccordion>Accordion</CdxAccordion></div>
        <div class="item"><CdxButton>Button</CdxButton></div>
        <div class="item"><CdxButtonGroup :buttons="[...buttonGroup]"></CdxButtonGroup></div>
        <div class="item"><CdxCard>Card</CdxCard></div>
        <div class="item"><CdxCheckbox>Checkbox</CdxCheckbox></div>
        <div class="item"><CdxChipInput :input-chips="[]"></CdxChipInput></div>
        <div class="item"><CdxCombobox :menu-items="[...dummyMenu]" selected="item1"></CdxCombobox></div>
        <div class="item"><CdxDialog title="Title"></CdxDialog></div>
        <div class="item"><CdxField>Field</CdxField></div>
        <div class="item"><CdxIcon :icon="cdxIconHelpNotice">Icon</CdxIcon></div>
        <div class="item"><CdxInfoChip>InfoChip</CdxInfoChip></div>
        <div class="item"><CdxLabel>Label</CdxLabel></div>
        <div class="item"><CdxLookup :menu-items="[...dummyMenu]" selected="Lookup"></CdxLookup></div>
        <div class="item"><CdxMenu :menu-items="[...dummyMenu]" selected="Menu" :expanded=false></CdxMenu></div>
        <div class="item"><CdxMenuButton :menu-items="[...dummyMenu]" selected="MenuButton"></CdxMenuButton></div>
        <div class="item"><CdxMenuItem id="1" value="Menuitem"></CdxMenuItem></div>
        <div class="item"><CdxMessage>Message</CdxMessage></div>
        <div class="item"><CdxMultiselectLookup :menu-items="[...dummyMenu]" :input-chips=[] :selected=[]></CdxMultiselectLookup></div>
        <div class="item"><CdxPopover>Popover</CdxPopover></div>
        <div class="item"><CdxProgressBar>Progressbar</CdxProgressBar></div>
        <div class="item"><CdxProgressIndicator>ProgressIndicator</CdxProgressIndicator></div>
        <div class="item"><CdxRadio name="Radio"></CdxRadio></div>
        <div class="item"><CdxSearchInput>SearchInput</CdxSearchInput></div>
        <div class="item"><CdxSearchResultTitle title="ResultTitle"></CdxSearchResultTitle></div>
        <div class="item"><CdxSelect :menu-items="[...dummyMenu]" selected="Select"></CdxSelect></div>
        <div class="item"><CdxTable caption="Table"></CdxTable></div>
        <div class="item"><CdxTabs><CdxTab name="Tab"></CdxTab></CdxTabs></div>
        <div class="item"><CdxTextArea>TextArea</CdxTextArea></div>
        <div class="item"><CdxTextInput>TextInput</CdxTextInput></div>
        <div class="item"><CdxThumbnail>Thumbnail</CdxThumbnail></div>
        <div class="item"><CdxToggleButton>ToggleButton</CdxToggleButton></div>
        <div class="item"><CdxToggleButtonGroup :buttons="[...buttonGroup]" model-value="TBG"></CdxToggleButtonGroup></div>
        <div class="item"><CdxToggleSwitch>ToggleSwitch</CdxToggleSwitch></div>
        <div class="item"><CdxTooltip>Tooltip</CdxTooltip></div>
        <div class="item"><CdxTypeaheadSearch id="" form-action="" :search-results=[]></CdxTypeaheadSearch></div>
    </div>
</template>
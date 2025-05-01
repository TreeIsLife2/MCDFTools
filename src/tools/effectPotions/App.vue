<script setup lang="ts">
import { reactive } from 'vue';
import { CdxLabel, CdxSelect } from '@wikimedia/codex';
import { effects } from './data.ts';

let data = reactive({
    effect: '',
    alllevels: [],
    level: 1,
})

let result = reactive({
    description: [],
})

function autogenerate() {
    if (effects[data.effect]) {
        data.alllevels = []
        result.description = [] 
        effects[data.effect].listlevels.forEach((level) => {
            data.alllevels.push({
                label: level.toString(),
                value: level.toString()
            })
        })
    } else { return }

    if (effects[data.effect].levels) {
        let alllevels = effects[data.effect].levels 

        alllevels.forEach((_level) => {
            if (_level.level == data.level || _level.level == 'all') {
                console.log(_level)
                let _duration = _level.duration ?? null
                let durationTime = '0:00'

                if (_duration) {
                    // convert into time
                    if (_duration > 59) {
                        let minutes = Math.floor(_duration / 60)
                        let seconds = _duration - (minutes * 60)

                        let secondsStr = ''
                        if (seconds < 10) { secondsStr = '0' + seconds } else { secondsStr = seconds.toString()}

                        durationTime = `${minutes}:${secondsStr}`
                    } else {
                        durationTime = _duration < 10 ? '0:0' + _duration : '0:' + _duration.toString() 
                    }
                } else {
                    if (_level.durationMin && _level.durationMax) {
                        let durationMin = _level.durationMin
                        let durationMax = _level.durationMax

                        if (durationMin > 59) {
                            let minutes = Math.floor(durationMin / 60)
                            let seconds = durationMin - (minutes * 60)

                            let secondsStr = ''
                            if (seconds < 10) { secondsStr = '0' + seconds } else { secondsStr = seconds.toString()}

                            durationTime = `${minutes}:${secondsStr}`
                        } else {
                            durationTime = durationMin < 10 ? '0:0' + durationMin : '0:' + durationMin.toString() 
                        }

                        if (durationMax > 59) {
                            let minutes = Math.floor(durationMin / 60)
                            let seconds = durationMin - (minutes * 60)

                            let secondsStr = ''
                            if (seconds < 10) { secondsStr = '0' + seconds } else { secondsStr = seconds.toString()}

                            durationTime = durationTime + ` - ${minutes}:${secondsStr}`
                        } else {
                            durationTime = durationMax < 10 ? durationTime + ' - 0:0' + durationMax : durationTime + ' - 0:' + durationMin.toString() 
                        }
                    } else {
                        durationTime = '0:00'

                    }
                }

                result.description.push({
                    duration: durationTime,
                    obtain: _level.obtain,
                    trigger: _level.trigger,
                })
            }
        })
    }
}
</script>

<template>
    <div class="form">
        <div class="item">
            <CdxLabel>Container</CdxLabel>
            <CdxSelect
            v-model:selected="data.effect"
            :menu-items="[
                { label: 'Absorption', value: 'absorption' },
                { label: 'Conduit', value: 'conduit' },
                { label: 'Dolphin\'s Grace', value: 'dolphingrace' },
                { label: 'Glowing', value: 'glowing' },
                { label: 'Haste', value: 'haste' },
                { label: 'Hero of the Village', value: 'villhero' },
                { label: 'Resistance', value: 'resistance' },
                { label: 'Saturation', value: 'saturation' },
                { label: 'Bad Omen', value: 'badomen' },
                { label: 'Blindness', value: 'blindness' },
                { label: 'Darkness', value: 'darkness' },
                { label: 'Hunger', value: 'hunger' },
                { label: 'Mining Fatigue', value: 'fatigue' },
                { label: 'Nausea', value: 'nausea' },
                { label: 'Wither', value: 'wither' }
            ]" @update:selected="autogenerate"/>
        </div>

        <div class="item">
            <CdxLabel>Level</CdxLabel>
            <CdxSelect v-model:selected="data.level" :menu-items="data.alllevels" @update:selected="autogenerate"/>
        </div>
    </div>
    <div class="result">
        <div v-for="effect in result.description" style="border-bottom: 2px solid #ccc">
            <CdxLabel><span>Duration: </span> <span>{{ effect.duration }}</span></CdxLabel>
            <CdxLabel><span>Obtaining: </span> <span>{{ effect.obtain }}</span></CdxLabel>
            <CdxLabel><span>Trigger: </span> <span>{{ effect.trigger }}</span></CdxLabel>            
        </div>

    </div>
</template>
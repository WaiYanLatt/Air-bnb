<script>
import SingleRoomCard from '@/components/SingleRoomCard.vue';
import useStay from '@/pinia/stay.js';

export default {
    data() {
        return {
            useStay: useStay(),
        };
    },
    async created() {
        const results = await this.useStay.getStay();
        this.useStay.setStay(results);
    },
    components: { SingleRoomCard }
}
</script>



<template>
    <div class="mt-56">
        <div v-for="result in useStay.results">
            <SingleRoomCard :result="result"/>
        </div>
    </div>
</template>
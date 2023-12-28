<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from '@fullcalendar/interaction'

import { onMounted, ref } from "vue";
import axios from "axios";
import router from "@/router";
import { useDiaryStore } from "@/stores/diary";

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  setup() {

    const diaryStore = useDiaryStore();


    const calendarOptions = ref({
      plugins: [dayGridPlugin, interactionPlugin,],
      initialView: "dayGridMonth",
      weekends: true,
      selectable: true,
      navLinks: true,
      navLinkDayClick: function (date, jsEvent) {
        // 캘린더에서 날짜를 클릭했을 때
        if (diaryStore.getList.value) {
          for (let i = 0; i < diaryStore.getList.value.length; i++) {
            let Dates = diaryStore.getList.value[i].diary_date.split('-');
            if (date.getFullYear() == Dates[0]
              && date.getMonth() + 1 == Dates[1]
              && date.getDate() == Dates[2].split(" ")[0]
            ) {
              console.log("asd?");
              router.push({
                name: 'diaryDetail',
                params: { id : diaryStore.getList.value[i].diary_id }
              });
            }

          }
        }
      },
      events: [
        {
          title: "asd",
          start: new Date(),
          display: "background",
        },
      ],
      height: "800px",
    });

    const updateCalendarOptions = async () => {
      await diaryStore.getDiaryList();
      if (diaryStore.getList.value) {
        calendarOptions.value.events = await diaryStore.getList.value.map((diary) => ({
          title: diary.title,
          start: diary.diary_date,
        }));

      }
    };

    updateCalendarOptions();

    return {
      calendarOptions,
      updateCalendarOptions,
    };
  },

};
</script>

<template>
  <FullCalendar :options="calendarOptions" />
</template>

<style>
/* November 2023 title부분 */
.fc .fc-toolbar-title {
  font-size: 15px;
}

.fc .fc-button {
  font-size: 10px;
}
</style>
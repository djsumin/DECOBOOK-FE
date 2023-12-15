import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DiaryView from "@/views/DiaryView.vue";
import LedgerView from "@/views/LedgerView.vue";
import RegistDiaryView from "@/views/RegistDiaryView.vue";
import RegistLedgerView from "@/views/RegistLedgerView.vue";
import RegistUserView from "@/views/RegistUserView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/diary",
      name: "diary",
      component: DiaryView,
    },
    {
      path: "/ledger",
      name: "ledger",
      component: LedgerView,
    },
    {
      path: "/registDiary",
      name: "registDiary",
      component: RegistDiaryView,
    },
    {
      path: "/registLedger",
      name: "registLedger",
      component: RegistLedgerView,
    },
    {
      path: "/registUser",
      name: "registUser",
      component: RegistUserView,
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

import DiaryView from "@/views/DiaryView.vue";
import DiaryDetail from "@/components/diary/DiaryDetail.vue";
import DiaryList from "@/components/diary/DiaryList.vue";
import DiaryMonthly from "@/components/diary/DiaryMonthly.vue";
import DiaryUpdate from "@/components/diary/DiaryUpdate.vue";

import LedgerView from "@/views/LedgerView.vue";
import LedgerCategoryDetail from "@/components/ledger/LedgerCategoryDetail.vue";
import LedgerCategoryList from "@/components/ledger/LedgerCategoryList.vue";
import LedgerDetail from "@/components/ledger/LedgerDetail.vue";
import LedgerList from "@/components/ledger/LedgerList.vue";
import LedgerMonthlyList from "@/components/ledger/LedgerMonthlyList.vue";
import LedgerUpdate from "@/components/ledger/LedgerUpdate.vue";

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
      children: [
        {
          path: "update",
          name: "diaryUpdate",
          component: DiaryUpdate,
        },
      ],
    },
    {
      path: "/detail/:id",
      name: "diaryDetail",
      component: DiaryDetail,
    },
    {
      path: "/diarylist",
      name: "diaryList",
      component: DiaryList,
    },
    {
      path: "/monthly",
      name: "diaryMonthly",
      component: DiaryMonthly,
    },
    {
      path: "/ledger",
      name: "ledger",
      component: LedgerView,
      children: [
        {
          path: "categorydetail",
          name: "ledgerCategoryDetail",
          component: LedgerCategoryDetail,
        },
        {
          path: "categorylist",
          name: "ledgerCategoryList",
          component: LedgerCategoryList,
        },
        {
          path: "detail",
          name: "ledgerDetail",
          component: LedgerDetail,
        },
        {
          path: "",
          name: "ledgerList",
          component: LedgerList,
        },
        {
          path: "monthly",
          name: "ledgerMonthlyList",
          component: LedgerMonthlyList,
        },
        {
          path: "/update",
          name: "ledgerUpdate",
          component: LedgerUpdate,
        },
      ],
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

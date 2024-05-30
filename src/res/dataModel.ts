import { ref } from "vue";

export interface Data {
  id: number;
  title: string;
  url: string;
  detail: string;
  info: string;
}
export const dataBlocks = ref<Data[]>([
  {
    id: 1,
    title: "游戏王",
    url: "https://123.com",
    detail: "惊为天人！如此构造简直是巧夺天工，妙哉妙哉！",
    info: "hakwdhajwdbawjbhdhabwbdhabwdbhahbsdbajvhwdhahjvw",
  },
  {
    id: 2,
    title: "火鸡在线",
    url: "https://123.com",
    detail: "惊为天人！如此构造简直是巧夺天工，妙哉妙哉！",
    info: "hakwdhajwdbawjbhdhabwbdhabwdbhahbsdbajvhwdhahjvw",
  },
  {
    id: 3,
    title: "杀手2",
    url: "https://123.com",
    detail: "惊为天人！如此构造简直是巧夺天工，妙哉妙哉！",
    info: "hakwdhajwdbawjbhdhabwbdhabwdbhahbsdbajvhwdhahjvw",
  },
  {
    id: 4,
    title: "辐射4",
    url: "https://123.com",
    detail: "惊为天人！如此构造简直是巧夺天工，妙哉妙哉！",
    info: "hakwdhajwdbawjbhdhabwbdhabwdbhahbsdbajvhwdhahjvw",
  },
  {
    id: 5,
    title: "老滚5",
    url: "https://123.com",
    detail: "惊为天人！如此构造简直是巧夺天工，妙哉妙哉！",
    info: "hakwdhajwdbawjbhdhabwbdhabwdbhahbsdbajvhwdhahjvw",
  },
]);

import { An } from './data.js';
export const an = [
    {name: "枫芷纪日", date: (new Date(2022, 7, 24, 0, 0, 0))},
    {name: "星火纪日", date: (new Date(2022, 11, 29, 0, 0, 0))},
    {name: "洛凌纪日", date: (new Date(2023, 8, 16, 0, 0, 0))},
    {name: '双生纪日', date: (new Date(2023, 8, 29, 0, 0, 0))},
    {name: '霜月纪日', date: (new Date(2023, 11, 8, 0, 0, 0))},
    {name: '霖枠纪日', date: (new Date(2024, 0, 15, 0, 0, 0))},
    {name: '海色纪日', date: (new Date(2024, 5, 8, 7, 52, 0))},
    {name: '紫茗纪日', date: (new Date(2024, 6, 5, 0, 0, 0))},
    {name: '风和纪日', date: (new Date(2024, 7, 4, 0, 0, 0))},
    {name: '琼依纪日', date: (new Date(2024, 8, 18, 0, 0, 0))},
    {name: '潮帆轻语', date: (new Date(2024, 9, 3, 0, 0, 0))},
    {name: '明堂纪日', date: (new Date(2024, 10, 5, 0, 0, 0))},
    {name: '域外飞雪', date: (new Date(2024, 10, 24, 0, 0, 0))},
    {name: '浮世繪夢', date: (new Date(2024, 11, 22, 0, 0, 0))},
    {name: '白雲飄絮', date: (new Date(2025, 1, 6, 0, 0, 0))},
    {name: '無夢殘願', date: (new Date(2025, 1, 20, 0, 0, 0))},
    {name: '海崖冬淚', date: (new Date(2025, 2, 17, 12, 0, 0))},
    {name: '锐明残月', date: (new Date(2025, 3, 26, 2, 50, 0))},
].sort((a, b) => {
    return a.date.getTime() - b.date.getTime()
}).reverse() as An[]

import { An } from './data.js';
export const an = [
    {name: "枫芷纪日", date: (new Date(2022, 7, 24, 0, 0, 0))},
    {name: "星火纪日", date: (new Date(2022, 11, 29, 0, 0, 0))},
    {name: "洛凌纪日", date: (new Date(2023, 8, 16, 0, 0, 0))},
    {name: '双生纪日', date: (new Date(2023, 8, 29, 0, 0, 0))},
    {name: '霜月纪日', date: (new Date(2023, 11, 8, 0, 0, 0))},
    {name: '霖枠纪日', date: (new Date(2024, 0, 15, 0, 0, 0))},
    {name: '海色纪日', date: (new Date(2024, 5, 8, 7, 52, 0))},
    {name: '紫茗纪日', date: (new Date(2024, 6, 5, 0, 0, 0))}
].sort((a, b) => {
    return a.date.getTime() - b.date.getTime()
}).reverse() as An[]

1. Install dependencies
    ```sh
    yarn install
    ```
2. Change the date in `config.ts`
    ```ts
    export const an = [
        {name: "枫芷纪日", date: (new Date(2022, 7, 24, 0, 0, 0))},
        {name: "星火纪日", date: (new Date(2022, 11, 29, 0, 0, 0))},
        {name: "洛凌纪日", date: (new Date(2023, 8, 16, 0, 0, 0))},
        {name: '霖枠纪日', date: (new Date(2024, 0, 15, 0, 0, 0))}
    ] as An[]
    ```
3. Install extension
    ```sh
    make install
    ```

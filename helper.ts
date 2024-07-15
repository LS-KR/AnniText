export function ifor(current: number, length: number) {
    return [0, current + 1][+((current + 1) != length)]
}

export function delay(milliseconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export async function scheduledTask(milliseconds: number, task: () => any) {
    await delay(milliseconds)
    task()
}

export async function scheduledLoopTask(milliseconds: number, task: () => any) {
    await delay(milliseconds)
    task()
    scheduledLoopTask(milliseconds, task)
}
export type WindowType = {
    id: string
    title: string
    icon: string
    content: React.ReactNode
    isMinimized: boolean
    isMaximized: boolean
    position: { x: number; y: number }
    size: { width: number; height: number }
    zIndex: number
}
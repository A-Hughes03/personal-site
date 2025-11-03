"use client"

type DesktopIcon = {
    id: string
    title: string
    icon: string
    content: React.ReactNode
}

type DesktopProps = {
    icons: DesktopIcon[]
}

export default function Dekstop({ icons }: DesktopProps) {
    return (
        <div>
            {icons.map((icon) => (
                <div key={icon.id} style={{ display: 'inline-block', margin: '10px', textAlign: 'center' }}>
                    <div style={{ fontSize: '48px' }}>{icon.icon}</div>
                    <div>{icon.title}</div>
                </div>
            ))}
        </div>
    );
}
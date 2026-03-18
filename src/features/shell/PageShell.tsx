interface Props {
  children: React.ReactNode
}

export default function PageShell({ children }: Props) {
  return <div className="mx-auto max-w-7xl px-6 py-8 flex-1 w-full">{children}</div>
}

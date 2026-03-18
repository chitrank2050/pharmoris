export default function Footer() {
  return (
    <footer className="mt-auto py-8 border-t border-line text-center text-muted text-sm px-6 bg-surface w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-medium">
          PHARMORIS Intelligence Platform &copy; {new Date().getFullYear()}.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-primary transition-colors">
            Documentation
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Support
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}

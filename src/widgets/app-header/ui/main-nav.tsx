import Link from "next/link";

export function MainNav() {
  return (
    <nav className="flex items-start md:items-center gap-6 text-sm font-medium flex-col md:flex-row ">
      <Link
        className="transition-colors hover:text-foreground/80 text-foreground/60"
        href="/map"
      >
        Услуги
      </Link>
      <Link
        className="transition-colors hover:text-foreground/80 text-foreground/60"
        href="/learn"
      >
        Прайс лист
      </Link>
      <Link
        className="transition-colors hover:text-foreground/80 text-foreground/60"
        href="/learn"
      >
        Контакты
      </Link>
      <Link
        className="transition-colors hover:text-foreground/80 text-foreground/60"
        href="/learn"
      >
        Наши работы
      </Link>
      <Link
        className="transition-colors hover:text-foreground/80 text-foreground/60"
        href="/learn"
      >
        Партнеры
      </Link>
      <Link
        className="transition-colors hover:text-foreground/80 text-foreground/60"
        href="/learn"
      >
        О компании
      </Link>
      <Link
        className="transition-colors hover:text-foreground/80 text-foreground/60"
        href="/learn"
      >
        Онлайн камеры
      </Link>
    </nav>
  );
}
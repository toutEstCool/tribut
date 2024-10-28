"use client";
import { CarouselMultiply } from "@/shared/ui/carousel-multiply";
import { HeroSlide } from "./slide";
import styles from "./styles.module.scss";
import { heroMovies } from "../config/hero-movies";

export const Hero = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <CarouselMultiply
        className={styles.slider}
        items={heroMovies}
        options={{
          loop: true,
        }}
        renderItem={(item) => <HeroSlide item={item} />}
        slideClassName={styles.slide}
      />
    </div>
  </section>
);

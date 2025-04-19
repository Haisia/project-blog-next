import {TechStackProps} from "@/app/page";

const techStackIconBaseUrl = '/icons/tech-stack/';

export const skilledIn: TechStackProps[] = [
  {content: 'Spring / Spring Boot', src: `${techStackIconBaseUrl}spring.svg`},
  {content: 'JPA', src: `${techStackIconBaseUrl}spring-data.svg`},
  {content: 'MyBatis', src: `${techStackIconBaseUrl}mybatis.svg`},
  {content: 'JavaScript', src: `${techStackIconBaseUrl}javascript.svg`},
  {content: 'MySQL', src: `${techStackIconBaseUrl}mysql.svg`},
  {content: 'Junit', src: `${techStackIconBaseUrl}junit.svg`},
]

export const learning: TechStackProps[] = [
  {content: 'RabbitMQ', src: `${techStackIconBaseUrl}rabbitMQ.svg`},
  {content: 'PostgreSQL', src: `${techStackIconBaseUrl}postgresql.svg`},
  {content: 'MongoDB', src: `${techStackIconBaseUrl}mongodb.svg`},
  {content: 'React', src: `${techStackIconBaseUrl}reactjs.svg`},
  {content: 'Next.js', src: `${techStackIconBaseUrl}nextjs.svg`},
  {content: 'TailwindCSS', src: `${techStackIconBaseUrl}tailwind.svg`},
]
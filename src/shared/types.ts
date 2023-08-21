export enum SelectedPage {
  Home= "home",
  Projetos = "projetos",
  Sobre = "sobre",
  ContactMe = "contate-me"
}

export interface ProjectType{
  image: string;
  title: string;
  description: string;
  link: string;
}
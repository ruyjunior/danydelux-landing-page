import { IMenuItem, ISocials } from "@/types";
import { menuItems } from "./menuItems";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    address: string;
    socials: ISocials;
} = {
    subheading: "Your women's fashion store",
    quickLinks: menuItems,
    email: 'empresa@dominio.com',
    telephone: '+5571988372937',
    address: 'Faz grande 4, setor 7, caminho 48, casa 2, Fim de linha de boca da mata, Cep 41345185',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        //twitter: 'https://twitter.com/Twitter',
        //facebook: 'https://facebook.com',
        //youtube: 'https://youtube.com',
        //linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/danydelux',
    }
}
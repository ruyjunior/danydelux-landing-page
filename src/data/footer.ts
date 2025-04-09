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
    email: 'danydeluxdany@gmail.com',
    telephone: '+5571988372937',
    address: 'Ac. Local 08- Faz. Grande IV | St. 07 - Fazenda Grande IV, Salvador - BA, 41345-180, Brasil',
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

//Endereço: Faz grande 4,setor 7 , caminho 48 casa 2,Fim de linha de boca da mata. Cep:41345185
import AppColor from "@common/styles/variables-static";

export type LinksType = {
    ImageNode: any;
    ImageNodeActive: any;
    text: string;
    showNode?: React.ReactNode;
    activeIndex?: number;
    onClick?: any;
    index?: number;
};

type link = {
    text:string;
    link: string;
}
export type CategoryItemProps = {
    icon: any;
    title: string;
    link: link[]
}
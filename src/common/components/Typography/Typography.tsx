import cl from './Typography.module.scss'

const allVariants: Record<string, React.FC<React.HTMLProps<any>>> = {
  title: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
  titleSmall: ({ children, ...props }) => <h4 {...props}>{children}</h4>,
  subtitle: ({ children, ...props }) => <h6 {...props}>{children}</h6>,
  body1: ({ children, ...props }) => <span {...props}>{children}</span>,
  body2: ({ children, ...props }) => <p {...props}>{children}</p>,
  body3: ({ children, ...props }) => <p {...props}>{children}</p>,
  body4: ({ children, ...props }) => <p {...props}>{children}</p>,
  body5: ({ children, ...props }) => <p {...props}>{children}</p>,
  inputText: ({ children, ...props }) => <p {...props}>{children}</p>,
};


type VariantListTypes = 'title' | 'titleSmall' |'subtitle' |'body1' |'body2' | 'body3' | 'body4' | 'body5' |'inputText';
type TextAlign = 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit' | 'start';
type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'initial';

interface TypographyProps {
variant?: VariantListTypes;
color?: string;
textAlign?: TextAlign;
textTransform?: TextTransform;
children: React.ReactNode;
[x: string]: any;
}

const Typography = ({ variant, color, children,textAlign,textTransform,style, ...props }: TypographyProps) => {

const Component = variant ? allVariants[variant] : allVariants['body1'];
const dynamicClassName = variant ? cl[variant] : cl['body1']

return <Component {...props} className={`${dynamicClassName}`} style={{ color: color, textAlign: textAlign,textTransform: textTransform,...style}}>{children}</Component>;

};

export default Typography;
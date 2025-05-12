

type TitleProps = {
    title: string;
}

export default function Title({title}:TitleProps) {
  return (
    <div className="mx-auto text-center">
        <h3 className="font-bold text-[22px] text-[var(--color-title-primary)]
        my-8
        before:content-['']
        before:bg-[var(--color-primary)] 
        before:h-px 
        before:w-20 
        before:m-[0_auto_15px]
        before:block
        after:content-['']
        after:bg-[var(--color-primary)]
        after:h-px
        after:w-20
        after:m-[17px_auto_0]
        after:block
        ">
          {title}
          </h3>
    </div>
  )
}

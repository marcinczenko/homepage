import { useRadio, VisuallyHidden, RadioProps, cn } from '@nextui-org/react'
import { ReactNode } from 'react'

interface CustomRadioProps extends RadioProps {
  additionalConfiguration?: ReactNode
  price?: number
}

const CustomRadio = ({
  additionalConfiguration,
  price,
  ...props
}: CustomRadioProps) => {
  const {
    Component,
    children,
    description,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps
  } = useRadio(props)
  console.log('price[CustomRadio]:', price)
  return (
    <Component
      {...getBaseProps()}
      className={cn(
        'group relative inline-flex flex-col items-center justify-start hover:bg-theme-very-light-yellow',
        'w-full cursor-pointer gap-4 rounded-lg border-2 border-default p-4',
        'data-[selected=true]:border-primary'
      )}
    >
      {price !== undefined && (
        <div className='absolute right-0 top-0'>{price}</div>
      )}
      <div
        className={cn(
          'group inline-flex flex-row items-center justify-start hover:bg-theme-very-light-yellow',
          `w-full cursor-pointer gap-4 ${additionalConfiguration ? 'border-b-2 border-default' : ''} p-4`,
          'data-[selected=true]:border-primary'
        )}
      >
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <span {...getWrapperProps()}>
          <span {...getControlProps()} />
        </span>
        <div {...getLabelWrapperProps()}>
          {children && <span {...getLabelProps()}>{children}</span>}
          {description && (
            <span className='text-small text-foreground'>{description}</span>
          )}
        </div>
      </div>
      {additionalConfiguration}
    </Component>
  )
}

export { CustomRadio }

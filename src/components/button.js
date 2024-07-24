import classNames from "classnames"

function Button({text , variant= 'default'}) {
    return (
        <button className={
            classNames({
                "p-4 h-10 flex items-center rounded": true,
                "bg-blue-200": variant === 'default',
                "bg-red-300": variant === 'success'
            })
        }>{text}</button>

    )
}
export default Button
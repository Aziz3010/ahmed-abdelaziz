const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="container flex items-center justify-between h-full pl-[40px] pr-[40px]">
        {children}
    </div>
  )
}

export default Container
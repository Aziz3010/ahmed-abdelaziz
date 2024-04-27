const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="container flex items-center justify-between h-full sm:pl-[40px] sm:pr-[40px] pl-[16px] pr-[16px]">
        {children}
    </div>
  )
}

export default Container
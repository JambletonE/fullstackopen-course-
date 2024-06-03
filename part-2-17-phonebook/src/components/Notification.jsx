const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
  console.log("Hello from Notificatios")
  return (
    <div className='error'>
      {message}
    </div>
  )
}
export default Notification
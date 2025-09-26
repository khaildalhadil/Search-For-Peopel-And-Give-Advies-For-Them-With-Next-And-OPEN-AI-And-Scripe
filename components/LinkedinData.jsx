
export default function LinkedinData() {

  const LinkedinDataUser = useMyStore(state => state.LinkedinDataUser);

  return (
    <div className="w-[1300] m-auto bg-red-400">
      <img src={LinkedinDataUser.person.photoUrl} alt="user image" />
    </div>
  )
}

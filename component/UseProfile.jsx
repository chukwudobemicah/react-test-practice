export default function UseProfile({
  displayName,
  userName,
  isEmailVerified,
  email,
}) {
  return (
    <div>
      <div>displayname: {displayName}</div>
      <div>username: {userName}</div>
      <div>email: {email}</div>
      verified: {isEmailVerified ? "email verified" : "email not verified"}
    </div>
  );
}

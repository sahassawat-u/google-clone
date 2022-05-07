function Avatar({ url }) {
  return (
    <div>
      <img
        className="rounded-full h-10
        cursor-pointer trasition duration-150
        transform hover:scale-110"
        loading="lazy"
        src={url}
        alt="profile"
      />
    </div>
  );
}

export default Avatar;

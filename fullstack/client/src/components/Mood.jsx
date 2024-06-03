const Mood = ({ name, emoji, selectedMood, setSelectedMood }) => {
  const handleSelect = () => {
    // to clear
    if(selectedMood === name) {
      setSelectedMood("");
    } else {
      // newly select/to change new mood
      setSelectedMood(name);
    }
  }
  
  return (
    <div
      onClick={handleSelect}
      className={`w-20 flex flex-col justify-center items-center gap-y-0.5 px-2 py-5 mx-0.5 mt-2 rounded-full capitalize ${
        selectedMood === name ? "bg-violet-500 text-white" : "bg-violet-100"
      } lg:px-5 lg:py-6`}
    >
      <span className="text-3xl lg:text-4xl">{emoji}</span>
      <span className="">{name}</span>
    </div>
  );
}
export default Mood;
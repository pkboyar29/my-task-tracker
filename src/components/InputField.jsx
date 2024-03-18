const InputField = ({ text, handleInput, handleSubmit }) => {
   return (
      <label className="label">
         <input className="input" value={text} onChange={(e) => handleInput(e.target.value)} />
         <button className="button" onClick={handleSubmit}>Add Todo</button>
      </label>
   )
}

export default InputField
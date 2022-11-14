
import Container from "../../assets/containers/SettingsItem"

const SettingsItem = ({ type, name, value, handleChange, labelText, h3Text, descText, photo, setPhoto, userPhoto, handleSubmit }) => {
    return (
        <Container>
            <aside>
                {labelText &&
                    <label htmlFor={name} className="title">{labelText}</label>
                }
            </aside>
            <div className="content">
                {type === "inputFile" &&
                    <>
                        <div className="img-container">
                            <img src={(photo && URL.createObjectURL(photo)) || userPhoto || "https://firebasestorage.googleapis.com/v0/b/social-media-98b62.appspot.com/o/avatar.jpg?alt=media&token=5fef33f4-5f1c-4353-a7f8-f4c584642808"} alt="user" />
                        </div>
                        <label htmlFor="file" className="file-label">{labelText}</label>
                        <input name={name} type="file" id="file" className='file-input' onChange={(e) => setPhoto(e.target.files[0])} />
                    </>
                }
                {type === "inputUsername" &&
                    <>
                        <input name={name} id={name} className="input" type="text" value={value} onChange={() => { }} />
                        <p className="desc">{descText}</p>
                    </>
                }
                {type === "inputText" &&
                    <input name={name} id={name} type="text" className="input" value={value} onChange={handleChange} />
                }

                {type === "textarea" &&
                    <textarea className="textarea" name={name} id={name} value={value} onChange={handleChange}></textarea>

                }
                {type === "header" &&
                    <div className="desc">
                        <h3>{h3Text}</h3>
                        {descText}
                    </div>
                }
                {type === "submitBtn" &&
                    <button onClick={handleSubmit} className="btn-submit">{value}</button>
                }
            </div>
        </Container>
    )
}

export default SettingsItem
import { useState, useRef, useEffect, useReducer } from "react";
function blogsReducer(state, action) {
  // state: current
  // action: present action want to perform
  switch (action.type) {
    case "ADD":
      return [action.blog, ...state];
    case "REMOVE":
      return state.filter((blog, index) => index !== action.index);
    default:
      return [];
  }
}
//Blogging App using Hooks
export default function Blog() {
  const [formData, setFormData] = useState({ title: "", content: "" });
  // const [blogs, setBlog] = useState([]);
  const titleRef = useRef(null);
  const [blogs, dispatch] = useReducer(blogsReducer, []);
  //Passing the synthetic event as argument to stop refreshing the page on submit
  //Using useEffect() with [] dependency we are actually creating compoentDidMount effect i.e, it will be executed on load
  useEffect(() => titleRef.current.focus(), []);
  useEffect(() => {
    if (blogs.length && blogs[0].title) {
      document.title = blogs[0].title;
    } else {
      document.title = "No Blogs!";
    }
  }, [blogs]);
  function handleSubmit(e) {
    e.preventDefault();
    // setBlog([{ title: formData.title, content: formData.content }, ...blogs]);
    dispatch({
      type: "ADD",
      blog: { title: formData.title, content: formData.content },
    });
    setFormData({ title: "", content: "" });
    titleRef.current.focus();
  }

  function removeBlog(i) {
    // setBlog(blogs.filter((blog, index) => i !== index));
    dispatch({ type: "REMOVE", index: i });
  }

  return (
    <>
      {/* Heading of the page */}
      <h1>Write a Blog!</h1>

      {/* Division created to provide styling of section to the form */}
      <div className="section">
        {/* Form for to write the blog */}
        <form onSubmit={handleSubmit}>
          {/* Row component to create a row for first input field */}
          <Row label="Title">
            <input
              className="input"
              placeholder="Enter the Title of the Blog here.."
              name="title"
              value={formData.title}
              ref={titleRef}
              onChange={(e) =>
                setFormData({
                  title: e.target.value,
                  content: formData.content,
                })
              }
            />
          </Row>

          {/* Row component to create a row for Text area field */}
          <Row label="Content">
            <textarea
              className="input content"
              placeholder="Content of the Blog goes here.."
              name="content"
              value={formData.content}
              required
              onChange={(e) =>
                setFormData({
                  title: formData.title,
                  content: e.target.value,
                })
              }
            />
          </Row>

          {/* Button to submit the blog */}
          <button className="btn">ADD</button>
        </form>
      </div>

      <hr />

      {/* Section where submitted blogs will be displayed */}
      <h2> Blogs </h2>
      {blogs.map((blog, i) => (
        <div className="blog" key={i}>
          <h3>{blog.title}</h3>
          <h5>{blog.content}</h5>

          <div className="blog-btn">
            <button onClick={() => removeBlog(i)} className="btn remove">
              DELETE
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

//Row component to introduce a new row section in the form
function Row(props) {
  const { label } = props;
  return (
    <>
      <label>
        {label}
        <br />
      </label>
      {props.children}
      <hr />
    </>
  );
}

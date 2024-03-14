import { Form, redirect, useActionData } from "react-router-dom";

export const Contact = () => {
    const error = useActionData();
    return (<div className="form-wrapper">
        <Form method="post" action="/help/contact">
            <div className="input-group">
                <label htmlFor="email">E-mail : </label>
                <input type="text" name="email" placeholder="Please enter a email"></input>
                {error?.email && <p className="error-msg">{error.email}</p>}
            </div>
            <div className="input-group">
                <label htmlFor="msg">Messagge</label>
                <textarea name="msg"></textarea>
                {error?.msg && <p className="error-msg">{error.msg}</p>}

            </div>
            <button className="btn btn-secondary" type="submit">Submit</button>
        </Form>
    </div>);
}


export const contactAction = async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const msg = data.get("msg");

    const error = {}
    if (!email.includes("@")) {
        error.email = "The mail is not in the correct format"
    }
    if (msg.length < 10) {
        error.msg = "You must type at least 10 characters"
    }

    if (Object.keys(error).length) {
        return error;
    }

    return redirect("/help  ")

}
import React from 'react';

const ForgetPass = () => {
    return (
        <div className="card-body">
            <form className="fieldset">
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                <button type="submit" className="btn btn-neutral mt-4">Send</button>
            </form>
        </div>
    );
};

export default ForgetPass;
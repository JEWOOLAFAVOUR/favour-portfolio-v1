
export const makeSecurity = (type, data) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    const phonePattern = /^0\d{10}$/;

    const errors = [];

    if (type === 'login') {
        const { email, password } = data;
        if (!email || email.trim() === "") {
            errors.push("Enter a Valid Email Address");
        } else if (!emailPattern.test(email)) {
            errors.push("Enter a Valid Email Address");
        }

        if (!password || password.trim() === "") {
            errors.push("Enter a Valid Password");
        }
    }

    if (type === 'update-creation') {
        const { bio, gender, department, level } = data;
        if (!bio || bio.trim() === "") {
            errors.push("Enter a Bio");
        }

        if (!gender || gender.trim() === "") {
            errors.push("Select a Gender");
        }

        if (!department || department.trim() === "") {
            errors.push("Select a Department");
        }

        if (!level || level.trim() === "") {
            errors.push("Select a Level");
        }
    }


    return errors;
};
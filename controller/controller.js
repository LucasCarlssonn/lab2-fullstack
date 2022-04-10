export const getStudents = async () => {
    const res = await fetch(`/api/users/${ID}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();
    return data;
};
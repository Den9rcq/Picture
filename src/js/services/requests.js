// Функция отправки данных на сервера
const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        body: data,
    });

    return await res.text();
};

// Функция получение данных с сервера
const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};

export { postData, getResource };
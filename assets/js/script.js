const url = 'https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json';

const tableBody = document.querySelector('tbody');

const sortByAsc = document.getElementById('sort_by_asc');
const sortByDesc = document.getElementById('sort_by_desc');
const sortByClass = document.getElementById('sort_by_class');
const sortByPassing = document.getElementById('sort_by_passing');
const sortByGender = document.getElementById('sort_by_gender');
const sortByMarks = document.getElementById("sort_by_marks");
const searchInput = document.getElementById("search_input");
const searchButton = document.getElementById("search_btn");


fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data);

    let tableRow = '';

    data.forEach(student => {
        const {id, img_src: img, first_name : fname, last_name: lname, gender, class: stadard, marks, passing, email} = student;
        tableRow += `<tr>
                        <th>${id}</th>
                        <td>
                            <div class="student">
                                <img src="${img}" alt="Student" class="student-img">
                                <h2 class="student-name">${fname} ${lname}</h2>
                            </div>
                        </td>
                        <td>${gender}</td>
                        <td>${stadard}</td>
                        <td>${marks}</td>
                        <td>${passing ? 'Pass' : 'Fail'}</td>
                        <td>${email}</td>
                    </tr>`
    });

    tableBody.innerHTML = tableRow;
    
    const getByPassing = (e) => {
        e.preventDefault();

        const filterdPassing = data.filter((student) => student.passing == true )
        // console.log(filterdPassing)
        let tableRow = ''

        filterdPassing.forEach(student => {
            const {id, img_src: img, first_name : fname, last_name: lname, gender, class: stadard, marks, passing, email} = student;
            tableRow += `<tr>
                            <th>${id}</th>
                            <td>
                                <div class="student">
                                    <img src="${img}" alt="Student" class="student-img">
                                    <h2 class="student-name">${fname} ${lname}</h2>
                                </div>
                            </td>
                            <td>${gender}</td>
                            <td>${stadard}</td>
                            <td>${marks}</td>
                            <td>${passing ? 'Pass' : 'Fail'}</td>
                            <td>${email}</td>
                        </tr>`
        })

        tableBody.innerHTML = tableRow;

    }

    const getByAsc = (e) => {
        e.preventDefault();

        const nameAscData = data.sort((a, b) => {
            const nameA = a.first_name.toLowerCase()
            const nameB = b.first_name.toLowerCase()

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            
            return 0;
        });

        let tableRow = ''

        nameAscData.forEach(student => {
            const {id, img_src: img, first_name : fname, last_name: lname, gender, class: stadard, marks, passing, email} = student;
            tableRow += `<tr>
                            <th>${id}</th>
                            <td>
                                <div class="student">
                                    <img src="${img}" alt="Student" class="student-img">
                                    <h2 class="student-name">${fname} ${lname}</h2>
                                </div>
                            </td>
                            <td>${gender}</td>
                            <td>${stadard}</td>
                            <td>${marks}</td>
                            <td>${passing ? 'Pass' : 'Fail'}</td>
                            <td>${email}</td>
                        </tr>`
        })

        tableBody.innerHTML = tableRow;
        console.log(nameAscData);
    }

    const getByDesc = (e) => {
        e.preventDefault();

        const nameDescData = data.sort((a, b) => {
            const nameA = a.first_name.toLowerCase()
            const nameB = b.first_name.toLowerCase()

            if (nameA > nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            
            return 0;
        });

        let tableRow = ''

        nameDescData.forEach(student => {
            const {id, img_src: img, first_name : fname, last_name: lname, gender, class: stadard, marks, passing, email} = student;
            tableRow += `<tr>
                            <th>${id}</th>
                            <td>
                                <div class="student">
                                    <img src="${img}" alt="Student" class="student-img">
                                    <h2 class="student-name">${fname} ${lname}</h2>
                                </div>
                            </td>
                            <td>${gender}</td>
                            <td>${stadard}</td>
                            <td>${marks}</td>
                            <td>${passing ? 'Pass' : 'Fail'}</td>
                            <td>${email}</td>
                        </tr>`
        })

        tableBody.innerHTML = tableRow;
        console.log(nameDescData);
    }

    const getByClass = (e) => {
        e.preventDefault(e);

        const classAscData = data.sort((a, b) => a.class - b.class);

        let tableRow = ''

        classAscData.forEach(student => {
            const {id, img_src: img, first_name : fname, last_name: lname, gender, class: stadard, marks, passing, email} = student;
            tableRow += `<tr>
                            <th>${id}</th>
                            <td>
                                <div class="student">
                                    <img src="${img}" alt="Student" class="student-img">
                                    <h2 class="student-name">${fname} ${lname}</h2>
                                </div>
                            </td>
                            <td>${gender}</td>
                            <td>${stadard}</td>
                            <td>${marks}</td>
                            <td>${passing ? 'Pass' : 'Fail'}</td>
                            <td>${email}</td>
                        </tr>`
        })

        tableBody.innerHTML = tableRow;
        // console.log(classAscData)

    }

    const getByGender = (e) => {
        e.preventDefault();

        const genderData = Object.groupBy(data, ({gender}) => gender);

        const genderKeys = Object.keys(genderData);

        let tableRow = ''

        genderKeys.forEach((keys) => {
            // console.log(keys)
            tableRow += `<tr>
                            <th colspan="7">${keys}</th>
                        </tr>`;
            if(genderData[keys].length >= 1) {
                genderData[keys].forEach(data => {
                    // console.log(data);
                    const {id, img_src: img, first_name : fname, last_name: lname, gender, class: stadard, marks, passing, email} = data;

                    tableRow += `<tr>
                                    <th>${id}</th>
                                    <td>
                                        <div class="student">
                                            <img src="${img}" alt="Student" class="student-img">
                                            <h2 class="student-name">${fname} ${lname}</h2>
                                        </div>
                                    </td>
                                    <td>${gender}</td>
                                    <td>${stadard}</td>
                                    <td>${marks}</td>
                                    <td>${passing ? 'Pass' : 'Fail'}</td>
                                    <td>${email}</td>
                                </tr>`
                }) 
            }
            
        })
        tableBody.innerHTML = tableRow;
        // console.log(genderKeys);
    }

    const getByMarks = (e) => {
        e.preventDefault();

        const marksAscData = data.sort((a, b) => a.marks - b.marks);

        let tableRow = ''

        marksAscData.forEach(student => {
            const {id, img_src: img, first_name : fname, last_name: lname, gender, class: stadard, marks, passing, email} = student;
            tableRow += `<tr>
                            <th>${id}</th>
                            <td>
                                <div class="student">
                                    <img src="${img}" alt="Student" class="student-img">
                                    <h2 class="student-name">${fname} ${lname}</h2>
                                </div>
                            </td>
                            <td>${gender}</td>
                            <td>${stadard}</td>
                            <td>${marks}</td>
                            <td>${passing ? 'Pass' : 'Fail'}</td>
                            <td>${email}</td>
                        </tr>`
        })

        tableBody.innerHTML = tableRow;
        // console.log(marksAscData)

    }

    let inputValue = ''

    searchInput.addEventListener('change', (e) => {
        inputValue = e.target.value

        if(inputValue == '') {
            let tableRow = ''

            data.forEach(student => {
                const {id, img_src: img, first_name : fname, last_name: lname, gender, class: stadard, marks, passing, email} = student;
                tableRow += `<tr>
                                <th>${id}</th>
                                <td>
                                    <div class="student">
                                        <img src="${img}" alt="Student" class="student-img">
                                        <h2 class="student-name">${fname} ${lname}</h2>
                                    </div>
                                </td>
                                <td>${gender}</td>
                                <td>${stadard}</td>
                                <td>${marks}</td>
                                <td>${passing ? 'Pass' : 'Fail'}</td>
                                <td>${email}</td>
                            </tr>`
            })
    
            tableBody.innerHTML = tableRow;    
        }
    })
    
    const getBySearched = () => {
        // console.log(inputValue);

        if(inputValue != '') {
            console.log('empty')
        }

        let tableRow = "";
        let notFound = false;
        let tableHasSearchedRow = false;

        if(inputValue != '') {
        
            data.forEach((student) => {
                const {id, img_src: img, first_name : fname, last_name: lname, gender, class: stadard, marks, passing, email} = student;
    
                if(inputValue.toLowerCase().includes(fname.toLowerCase()) ||
                    inputValue.toLowerCase().includes(lname.toLowerCase()) ||
                    inputValue.toLowerCase().includes(email.toLowerCase())) {
                        tableHasSearchedRow = true;
                        tableRow += `<tr>
                                        <th>${id}</th>
                                        <td>
                                            <div class="student">
                                                <img src="${img}" alt="Student" class="student-img">
                                                <h2 class="student-name">${fname} ${lname}</h2>
                                            </div>
                                        </td>
                                        <td>${gender}</td>
                                        <td>${stadard}</td>
                                        <td>${marks}</td>
                                        <td>${passing ? 'Pass' : 'Fail'}</td>
                                        <td>${email}</td>
                                    </tr>`
                    } else {
                        notFound = true;
                    }
    
                tableBody.innerHTML = tableRow;  
            })
    
            if(notFound && !tableHasSearchedRow) {
                tableRow += `<tr>
                                <th colspan="7" style="text-align: center;">No Data Found!</th>
                            </tr>`

                tableBody.innerHTML = tableRow;
            }

            // console.log(searchedData);
        }
    }


    searchButton.addEventListener('click', getBySearched)
    sortByAsc.addEventListener('click', getByAsc)
    sortByDesc.addEventListener('click', getByDesc)
    sortByPassing.addEventListener('click', getByPassing);
    sortByClass.addEventListener('click', getByClass);
    sortByGender.addEventListener('click', getByGender);
    sortByMarks.addEventListener('click', getByMarks);
})




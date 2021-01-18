import './style.css';


function JobsList() {
    return (
        <div className="jobs-container">
            <table className="table-jobs">
                <thead>
                    <th>CARGO</th>
                    <th>DESCRICAO</th>
                    <th>SALARIO</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Analista</td>
                        <td>Cursar analise e desenvolvimento de Software</td>
                        <td>2500.00</td>
                    </tr>
                </tbody>
            </table>
        </div>     
    );
}

export default JobsList;

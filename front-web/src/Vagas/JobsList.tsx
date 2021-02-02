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
                        <td>Administrador</td>
                        <td>Administrar admin</td>
                        <td>2500.00</td>
                    </tr>
                </tbody>
            </table>
        </div>     
    );
}

export default JobsList;

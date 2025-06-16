import React from "react";

const Table = (props) => {
    const { children, headers } = props;

    // console.log("Product Table Rendered");

    return (
        <div className="table-wrapper">
            <table className="table" cellSpacing={0} >
                <thead>
                    <tr>
                        {
                            headers.map((header, index) => (
                                <th key={index}>{header.label}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    )
};

export default React.memo(Table);
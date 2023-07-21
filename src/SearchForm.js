import React, { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";

/** Search widget.
 *
 * Appears on CompanyList and JobList so that these can be filtered
 * down.
 *
 * This component doesn't *do* the searching, but it renders the search
 * form and calls the `searchFor` function prop that runs in a parent to do the
 * searching.
 *
 * { CompanyList, JobList } -> SearchForm
 */

function SearchForm({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  /** Tell parent to filter */
  function handleSubmit(evt) {
    // take care of accidentally trying to search for just spaces
    evt.preventDefault();
    handleSearch(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  /** Update form fields */
  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className="d-flex align-items-center justify-content-center">
        <Form.Group className="justify-content-center">
          <Form.Control
            type="text"
            name="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit" className="btn btn-sm btn-dark m-1">
          <i className="bi bi-search"></i>
        </Button>
      </div>
    </Form>
  );
}

export default SearchForm;

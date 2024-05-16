import React, { Component } from "react";
import { FormField, Form, Radio } from "semantic-ui-react";
import { Cloth } from "@/api";
import { useState, useEffect } from "react";
import styles from "./Sizes.module.scss";


export class Size extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <Form style={{ backgroundColor: "LightGray", padding: 15, borderRadius: 30, marginBottom: 15 }} >
        <FormField style={{ fontSize: 15, color: "black" }} >
          Selecciona tu talla
           {/* <b>{this.state.value}</b> */}
        </FormField>
        <div className={styles.size} >
          <FormField>
            <Radio
              slider
              label="XS"
              name="xs"
              value="xs"
              checked={this.state.value === "xs"}
              onChange={this.handleChange}
            />
          </FormField>
          <FormField>
            <Radio
              slider
              label="S"
              name="s"
              value="s"
              checked={this.state.value === "s"}
              onChange={this.handleChange}
              style={{ marginLeft: 10, }}
            />
          </FormField>
          <FormField>
            <Radio
              slider
              label="M"
              name="m"
              value="m"
              checked={this.state.value === "m"}
              onChange={this.handleChange}
              style={{ marginLeft: 10,}}
            />
          </FormField>
        </div>
      </Form>
    );
  }
}

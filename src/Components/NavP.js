import React from "react";
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  Card,
  CardHeader,
  CardBody,
  TabContent,
  TabPane, Input
} from "reactstrap";

// core components

function NavP(){
  const [plainTabs, setPlainTabs] = React.useState("1");
  return (
    <>
      <Card className="card-nav-tabs card-plain">
        <CardHeader className="card-header-danger">
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav data-tabs="tabs" tabs>
                <NavItem>
                  <NavLink
                    className={plainTabs === "1" ? "active" : ""}
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      setPlainTabs("1");
                    }}
                  >
                    Gasto
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={plainTabs === "2" ? "active" : ""}
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      setPlainTabs("2");
                    }}
                  >
                    Ingresos
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <TabContent
            className="text-center"
            activeTab={"plainTabs" + plainTabs}
          >
            <TabPane tabId="plainTabs1">
            <Input placeholder="Ingrese su gasto" type="text"></Input>
            <Input type="select">
        <option>Seleccione Moneda</option>
        <option>MXN</option>
        <option>COP</option>
        <option>USD</option>
      </Input>
      <Input type="select">
        <option>Categoria </option>
        <option>Comida</option>
        <option>Recibos Del Hogar</option>
        <option>Otros</option>
      </Input>
      <button type="button" class="btn btn-success"> Guardar </button>
            </TabPane>
            <TabPane tabId="plainTabs2">
            <Input placeholder="Ingrese su Ingreso" type="text"></Input>
            <Input type="select">
        <option>Seleccione Moneda</option>
        <option>MXN</option>
        <option>COP</option>
        <option>USD</option>
      </Input>
      <button type="button" class="btn btn-success"> Guardar </button>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </>
  );
}

export default NavP;
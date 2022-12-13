export const FormC = () => {
  return (
            <div className="col-lg-6">
              <div className="contact-box ml-3">
                <h1 className="font-weight-light mt-2">Solicita tu contizacion</h1>
                <form className="mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input className="form-control" type="text" placeholder="Nombre" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input className="form-control" type="email" placeholder="Correo Electronico" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input className="form-control" type="text" placeholder="Celular" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <textarea className="form-control" rows="3" placeholder="Cotizacion" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> Enviar</span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
  );
};

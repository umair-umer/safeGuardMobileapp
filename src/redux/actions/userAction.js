import { baseUrl } from "../../api/BaseUrl"
import { getApi } from "../../api/fakeApiUser"
import { doctorAppointments, patientAppointments, docDetailsApp, detailsAppointment, setAnalytics } from "./authAction"

export const fetchAppointments = (index, id, screenName, appointments, setIsLoading, dispatch) => {
    setIsLoading(true)
    return async function (dispatch) {
        getApi(
            `${baseUrl}doctorapi/dashboard-data/doctor_appointments/?doctorid=${id}
              &status=${screenName}&startindex=${index}`
        )
            .then(result => {
                console.log('appointments Data', result)
                if (result.data.status) {
                    setIsLoading(false)
                    dispatch(doctorAppointments([...result.data.appointment, ...appointments]))
                } else {
                    setIsLoading(false)
                }
            })
            .catch(e => {
                console.log('catch err appointments', e)
                setIsLoading(false)
                // showMessage({
                //     animated: true,
                //     message: 'Failed',
                //     description: 'something went wrong!',
                //     type: 'danger',
                //     floating: true
                // })
            })
    }(dispatch)
}

export const fetchPatientAppointments = (index, id, screenName, appointments, setIsLoading, dispatch) => {
    setIsLoading(true)
    return async function (dispatch) {
        getApi(
            `${baseUrl}dashboard-data/patient_appointments/?patientId=${id}
            &status=${screenName}&startindex=${index}`
        )
            .then(result => {
                console.log('patient appointments Data', result)
                if (result.data.status) {
                    setIsLoading(false)
                    dispatch(patientAppointments([...result.data.appointment, ...appointments]))
                } else {
                    setIsLoading(false)
                }
            })
            .catch(e => {
                console.log('catch err appointments', e)
                setIsLoading(false)
                // showMessage({
                //     animated: true,
                //     message: 'Failed',
                //     description: 'something went wrong!',
                //     type: 'danger',
                //     floating: true
                // })
            })
    }(dispatch)
}

export const fetchDocAppDetalis = (id, doctorid, setIsLoading, dispatch) => {
    setIsLoading(true)
    return async function (dispatch) {
        getApi(`${baseUrl}doctorapi/dashboard-data/appointment_detail/?bookid=${id}&doctorid=${doctorid}`)
            .then(result => {
                console.log('fetchDocAppDetalis res', result)
                if (result.data.status) {
                    setIsLoading(false)
                    dispatch(docDetailsApp(result?.data?.AppointmentData))
                } else {
                    setIsLoading(false)
                }
            })
            .catch(e => {
                console.log('catch err fetchDocAppDetalis', e)
                setIsLoading(false)
            })
    }(dispatch)
}

export const fetchAppointmentDetalis = (id, setIsLoading, dispatch) => {
    setIsLoading(true)
    return async function (dispatch) {
        getApi(`${baseUrl}api/dashboard-data/appointment_detail/?bookid=${id}`)
            .then(result => {
                console.log('fetchAppointmentDetalis res', result)
                if (result.data.status) {
                    setIsLoading(false)
                    dispatch(detailsAppointment(result?.data?.AppointmentData))
                } else {
                    setIsLoading(false)
                }
            })
            .catch(e => {
                console.log('catch err fetchAppointmentDetalis', e)
                setIsLoading(false)
            })
    }(dispatch)
}

export const DashboardAnalytics = (id, setIsLoading, dispatch) => {
    setIsLoading(true)
    return async function (dispatch) {
        getApi(`${baseUrl}doctorapi/dashboard-data/analytics/?id=${id}`)
            .then(result => {
                console.log('DashboardAnalytics res===>', result)
                if (result.data.status) {
                    setTimeout(() => {
                        setIsLoading(false)
                    }, 1500);
                    dispatch(setAnalytics(result.data))
                } else {
                    setTimeout(() => {
                        setIsLoading(false)
                    }, 1500);
                }
            })
            .catch(e => {
                console.log('catch err DashboardAnalytics===>', e)
                setIsLoading(false)
            })
    }(dispatch)
}
/**
 * Test
 * Test API created by Integrated Technologies and Software Solutions, LLC --Sonny Saxton
 *
 * OpenAPI spec version: 1.0
 * Contact: sonny.saxton@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { AuthLoginCmd } from '../model/authLoginCmd';
import { AuthSignUpCmd } from '../model/authSignUpCmd';
import { ChangePasswordCmd } from '../model/changePasswordCmd';
import { ChangePasswordDto } from '../model/changePasswordDto';
import { TokenDto } from '../model/tokenDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class AuthService {

    protected basePath = 'http://localhost:49000/v0.1';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {

        if (configuration) {
            this.configuration = configuration;
            this.configuration.basePath = configuration.basePath || basePath || this.basePath;

        } else {
            this.configuration.basePath = basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Login
     * Login user. Generate a new valid JWT.
     * @param authLoginCmd 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postLogin(authLoginCmd: AuthLoginCmd, observe?: 'body', reportProgress?: boolean): Observable<TokenDto>;
    public postLogin(authLoginCmd: AuthLoginCmd, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TokenDto>>;
    public postLogin(authLoginCmd: AuthLoginCmd, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TokenDto>>;
    public postLogin(authLoginCmd: AuthLoginCmd, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (authLoginCmd === null || authLoginCmd === undefined) {
            throw new Error('Required parameter authLoginCmd was null or undefined when calling postLogin.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<TokenDto>(`${this.configuration.basePath}/auth/login`,
            authLoginCmd,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Sign-up
     * Register user. Returns a valid JWT. &lt;br&gt; AuthSignUpCmd &#x3D;&gt; authService.signUp(new User(user) [Note: user object is prepared with user.role &#x3D; UserRole.USER *AND* user.status &#x3D; UserStatus.PENDING] &#x3D;&gt; userService.create(user) *AND* authService.createToken(user) [Note: token generation is complete] &#x3D;&gt; userService.userRepository.save(user) [Note: user object is saved in DB]
     * @param authSignUpCmd 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postSignup(authSignUpCmd: AuthSignUpCmd, observe?: 'body', reportProgress?: boolean): Observable<TokenDto>;
    public postSignup(authSignUpCmd: AuthSignUpCmd, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TokenDto>>;
    public postSignup(authSignUpCmd: AuthSignUpCmd, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TokenDto>>;
    public postSignup(authSignUpCmd: AuthSignUpCmd, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (authSignUpCmd === null || authSignUpCmd === undefined) {
            throw new Error('Required parameter authSignUpCmd was null or undefined when calling postSignup.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<TokenDto>(`${this.configuration.basePath}/auth/signup`,
            authSignUpCmd,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update user password
     * Update user password matching route id.
     * @param changePasswordCmd 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postUpdatePW(changePasswordCmd: ChangePasswordCmd, observe?: 'body', reportProgress?: boolean): Observable<ChangePasswordDto>;
    public postUpdatePW(changePasswordCmd: ChangePasswordCmd, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ChangePasswordDto>>;
    public postUpdatePW(changePasswordCmd: ChangePasswordCmd, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ChangePasswordDto>>;
    public postUpdatePW(changePasswordCmd: ChangePasswordCmd, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (changePasswordCmd === null || changePasswordCmd === undefined) {
            throw new Error('Required parameter changePasswordCmd was null or undefined when calling postUpdatePW.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.patch<ChangePasswordDto>(`${this.configuration.basePath}/auth/password`,
            changePasswordCmd,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
